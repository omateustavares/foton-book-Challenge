import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import { FiPlus, FiHome, FiUser } from "react-icons/fi";
import * as S from "../../styles/styles";
import Input from "../components/Input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../utils/getValidationsErrors";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SignInFormData = {
  email: string;
  author: string;
  description: string;
};

export default function Home() {
  const router = useRouter();

  console.log("router", router);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData, { reset }) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("Required Name"),
        author: Yup.string().required("Required Author"),
        description: Yup.string().required("Required Description"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toast.success("Successfully created book", {
        position: toast.POSITION.TOP_LEFT,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <S.Container>
        <S.TitleAddNewBook>
          <h1>Add a new book</h1>
        </S.TitleAddNewBook>
        <S.ContentForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" title="Name" />
            <Input name="author" title="Author" />
            <TextArea name="description" title="Description" />
            <Button type="submit">Add new book</Button>
          </Form>
        </S.ContentForm>
      </S.Container>

      <S.NavigationBar>
        <S.ButtonNavigation onClick={() => router.push("/")}>
          <FiHome size={20} />
          <p>Home</p>
        </S.ButtonNavigation>
        <S.ButtonNavigation>
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
