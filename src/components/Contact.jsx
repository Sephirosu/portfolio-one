const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-gray-900 to-black p-4 text-white"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col  justify-center p-4 md:text-center">
        <div className="pb-8">
          <p className=" border-gray-500 text-4xl font-bold">Contact</p>
          <p className="py-6 md:text-lg">
            Please complete the form below to reach out to me.
          </p>
        </div>

        <div className=" flex items-center justify-center">
          <form
            action="https://getform.io/f/5b0eb13d-98f9-4910-926a-1fc9d7e899c7"
            method="POST"
            mode="cors"
            className=" flex w-full flex-col md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            ></textarea>

            <button className=" mx-auto my-8 flex items-center rounded-md  bg-gradient-to-b from-white to-red-800  px-6 py-3 text-xl font-bold text-black duration-300 hover:scale-110">
              Message me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
