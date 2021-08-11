/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import router, { useRouter } from "next/router";
import Router from "next/router";
import { setCookie } from "nookies";
import { useCallback, useEffect, useState } from "react";
import { FiPlus, FiHome, FiUser } from "react-icons/fi";
import bye from "../../public/images/bye.svg";
import * as S from "../../styles/styles";
import SearchInput from "../components/SearchInput";
import { useDebounce } from "../hooks/Debounce";
import api from "../services/api";
export interface Book {
  searchInfo: {
    textSnippet: string;
  };
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

export default function Home() {
  const router = useRouter();
  console.log(router.pathname);
  const [books, setBooks] = useState<Book[]>([]);
  const [booksHome, setBooksHome] = useState<Book[]>([]);

  const { debounce } = useDebounce();

  function setStateCookie(book: Book) {
    setCookie(null, "book", JSON.stringify(book), {
      maxAge: 86400,
      path: "/",
    });
  }

  useEffect(() => {
    api.get(`/volumes?q=search+terms`).then((response) => {
      setBooksHome(response.data.items);
    });
  }, []);

  const updateBookList = useCallback((name?: string) => {
    try {
      if (name !== "") {
        api.get(`/volumes?q=${name}`).then((response) => {
          setBooks(response.data.items);
        });
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  async function filterBooks(name?: string): Promise<void> {
    updateBookList(String(name));
  }

  console.log(Boolean(router.pathname === "/"));

  return (
    <>
      <S.Container>
        <S.ContentHeader>
          <SearchInput
            filterBooks={filterBooks}
            debounce={debounce}
            name="search"
            placeholder="Search book"
          />
        </S.ContentHeader>
        {books.length === 0 ? (
          <>
            <S.ContentHome>
              <S.TitleHello>
                <h1>Hi,</h1>
                <h1>Mehmed Al Fatih</h1>
                <div>
                  <Image src={bye} alt="bye" />
                </div>
              </S.TitleHello>

              <S.BookGrid>
                {booksHome.map((book: Book, item) => {
                  return (
                    <S.BookItem
                      key={item}
                      onClick={() => {
                        setStateCookie(book);
                        Router.push({
                          pathname: "/details",
                        });
                      }}
                    >
                      <div>
                        <img
                          src={`${
                            book?.volumeInfo.imageLinks?.thumbnail
                              ? book?.volumeInfo.imageLinks.thumbnail
                              : "https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg"
                          }`}
                        />
                      </div>

                      <p>{book.volumeInfo.title}</p>
                      <p>
                        {book.volumeInfo.authors &&
                          `by ${book.volumeInfo.authors[0]}`}
                      </p>
                    </S.BookItem>
                  );
                })}
              </S.BookGrid>
            </S.ContentHome>
          </>
        ) : (
          <S.BookGrid>
            {books.map((book: Book, item) => {
              return (
                <S.BookItem
                  key={item}
                  onClick={() => {
                    setStateCookie(book);
                    Router.push({
                      pathname: "/details",
                    });
                  }}
                >
                  <div>
                    <img
                      src={`${
                        book?.volumeInfo.imageLinks?.thumbnail
                          ? book?.volumeInfo.imageLinks.thumbnail
                          : "https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg"
                      }`}
                    />
                  </div>

                  <p>{book.volumeInfo.title}</p>
                  <p>
                    {book.volumeInfo.authors &&
                      `by ${book.volumeInfo.authors[0]}`}
                  </p>
                </S.BookItem>
              );
            })}
          </S.BookGrid>
        )}
      </S.Container>
      <S.NavigationBar>
        <S.ButtonNavigation>
          <FiHome size={20} />
          <p>Home</p>
        </S.ButtonNavigation>
        <S.ButtonNavigation onClick={() => router.push("/newbook")}>
          <FiPlus size={20} />
          <p>Add Boo</p>
        </S.ButtonNavigation>
        <S.ButtonNavigation>
          <FiUser size={20} />
          <p>Profile</p>
        </S.ButtonNavigation>
      </S.NavigationBar>
    </>
  );
}
