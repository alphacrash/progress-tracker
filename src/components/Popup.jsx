import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { isSecretValid } from "../lib/utils";

const Popup = ({ title, content, buttonLabel }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [secretInput, setSecretInput] = useState("");

  useEffect(() => {
    setIsAuthorized(isSecretValid());
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal} className={`cursor-pointer`}>
        {buttonLabel}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            {isAuthorized ? (
              <div>
                <div className="flex flex-row justify-between">
                  <h2 className="text-blue-500 text-2xl font-semibold mb-4">
                    {title}
                  </h2>
                  <div className="flex justify-end">
                    <div
                      onClick={closeModal}
                      className="cursor-pointer rounded-full hover:text-red-500"
                    >
                      <CircleX size={32} />
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 mb-6">{content}</div>
              </div>
            ) : (
              <div className="flex flex-col text-center">
                <input
                  type="text"
                  className="border border-gray-300 text-center rounded-md p-2 w-full mb-4"
                  value={secretInput}
                  placeholder="Enter Secret"
                  onChange={(e) => setSecretInput(e.target.value)}
                />
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => {
                      localStorage.setItem("secret", secretInput);
                      setIsAuthorized(isSecretValid());
                    }}
                    className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                  >
                    Submit
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-red-400 text-white px-4 py-2 rounded-md hover:hover:bg-red-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
