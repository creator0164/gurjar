import { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default function GurjarCard({ avatar, data, visible, onClose }) {
  const get = (element) => document.querySelector(element);

  const downloadCard = () => {
    const gurjarCardUser = get("#gurjarCard");
    html2canvas(gurjarCardUser, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        canvas.toBlob((blob) => saveAs(blob, "GurjarCard.png"));
      }
    );
  };

  if (!visible) return null;

  const handleOnClose = () => {
    onClose();
  };

  return (
    <div
      id="gurjarCard"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="flex flex-col  w-89 h-50 justify-center p-6 shadow-md rounded-xl border backg ">
        <div id="closeCard" className="flex justify-end">
          <button onClick={handleOnClose}>
            <AiFillCloseCircle />{" "}
          </button>
        </div>
        <img
          src={avatar}
          alt="NoImage"
          className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
        />
        <div className="w-89 h-50 text-center">
          <div className="my-2 space-y-1">
            <h2 id="name" className=" text-xl font-semibold">
              Umesh Sharma{data.name}
            </h2>
            <p className="px-5 text-sm dark:text-white-400">
              G-00000 {data.gurjar_id}
            </p>
          </div>
            <div className="text-center border-t border-b border-[#999] py-2 my-5 grid grid-rows-4 grid-cols-2 gap-4">
              <p className="text-sm mb-3">
                State: <br/><span className="text-[#999]">Karnataka</span>  {data.state}
              </p>
              <p className="text-sm mb-3">
                Country: <br/><span className="text-[#999]">India</span>  {data.nationality}
              </p>
              <p className="text-sm mb-3">
                City: <br/><span className="text-[#999]">Bengaluru</span>  {data.city}
              </p>
              <p className="text-sm mb-3">
                Village: <br/><span className="text-[#999]">Hulimavu</span>  {data.village}
              </p>
              <p className="text-sm mb-3">
                Blood Group: <br/><span className="text-[#999]">B+</span>  {data.blood_group}
              </p>
              <p className="text-sm mb-3">
                Birth Date: <br/><span className="text-[#999]">02/14/1991</span> {data.date_of_birth}
              </p>
              <p className="text-sm mb-3 col-span-2">
                Gotra: <br/><span className="text-[#999]">Bhardwaj</span> {data.gotra}
              </p>
            </div>
          <div
            id="downloadCard"
            onClick={downloadCard}
            className="flex justify-end"
          >
            <button className="text-white bg-[#555] w-full flex justify-center p-2 rounded-lg shadow-md border hover:shadow-none hover:bg-[#222]">
              <FiDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}