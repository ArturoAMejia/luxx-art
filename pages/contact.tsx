import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Layout } from "../components/layout/Layout";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lnzzvh9",
        "template_nf3pzu9",
        e.target,
        "bALz9P2iOBk52HH0j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Mensaje enviado correctamente");
    setName("");
    setLastname("");
    setEmail("");
    setMessage("");


    setTimeout(() => {
      router.push("/galeria");
    }, 3000);
  };

  return (
    <Layout title="Contacto" pageDescription="Página de contacto">

      <form onSubmit={sendEmail}>
        <div className="hero min-h-screen bg-base">
          <div className="flex-col justify-center hero-content lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="mb-5 text-5xl font-bold">Contáctanos</h1>
              <p className="mb-5">
                Para mayor informacion sobre los encargos, llene este formulario
                y nos pondremos en contacto con usted.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellido</span>
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="input input-bordered"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <label className="label"></label>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tu mensaje</span>
                    </label>
                    <textarea
                      className="textarea h-24 textarea-bordered"
                      name="mensaje"
                      placeholder="Hola!, me interesa..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
