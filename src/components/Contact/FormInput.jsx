const FormInput = ({
  type = "text",
  name,
  placeholder,
  required = true,
  isTextArea = false,
}) => {
  const commonProps = {
    name: name,
    id: name,
    placeholder: placeholder,
    required: required,
    className:
      "w-full p-4 rounded-lg bg-[#1a1a1a] text-white border-2 border-transparent focus:border-accent focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-500",
  };
  return isTextArea ? (
    <textarea {...commonProps} rows="5"></textarea>
  ) : (
    <input type={type} {...commonProps} />
  );
};

export default FormInput;
