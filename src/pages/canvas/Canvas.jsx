import React, { useRef, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";

export default function Canvas() {
  const [eventVal, setEventVal] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [quality, setQuality] = useState(119);
  //   let num = ((120 * 100) / 257) * 0.01;
  const canvasRef = useRef(null);
  const downRef = useRef(null);
  const showRef = useRef(null);

  // qualityFunc

  const qualityFunc = (quality, file) => {
    if (
      quality <= 199 &&
      quality > 121 &&
      file.size > 1500000 &&
      file.size < 2000000
    ) {
      return 0.06;
    } else if (
      quality <= 120 &&
      quality > 90 &&
      file.size > 1500000 &&
      file.size < 2000000
    ) {
      return 0.02;
    } else if (quality <= 199 && quality > 121 && file.size > 1000000) {
      return 0.17;
    } else if (quality <= 120 && quality > 90 && file.size > 1000000) {
      return 0.05;
    } else if (
      quality <= 199 &&
      quality > 121 &&
      file.size > 500000 &&
      file.size < 999000
    ) {
      return 0.33;
    } else if (
      quality <= 120 &&
      quality > 90 &&
      file.size > 500000 &&
      file.size < 999000
    ) {
      return 0.17;
    } else if (quality <= 50 && file.size > 500000 && file.size < 999000) {
      return 0.02;
    } else if (
      quality <= 199 &&
      quality > 121 &&
      file.size < 500000 &&
      file.size > 200000
    ) {
      return 0.8;
    } else if (
      quality <= 120 &&
      quality > 90 &&
      file.size < 500000 &&
      file.size > 200000
    ) {
      return 0.5;
    } else if (quality <= 50 && file.size < 500000 && file.size > 200000) {
      return 0.1;
    } else if (quality <= 199 && quality > 121 && file.size < 200000) {
      return 0.95;
    } else if (quality <= 120 && quality > 90 && file.size < 200000) {
      return 0.85;
    } else if (quality <= 50 && file.size < 200000 && file.size > 110000) {
      return 0.35;
    } else if (quality <= 50 && file.size < 100000) {
      return 0.7;
    }
  };
  // image compressing function
  const compressImage = async (e) => {
    const canvas = canvasRef.current;
    const file = e.target.files[0];
    const ctx = canvas.getContext("2d");
    const img = await createImageBitmap(file);
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // create download link
    canvas.toBlob(
      (blob) => {
        if (blob) {
          //   let show = showRef.current;
          //   let link = downRef.current;
          //   link.download = "canvasimg.jpeg";
          //   link.href = URL.createObjectURL(blob);
          //   show.src = ;
          //   link = null;
          setDownloadUrl(URL.createObjectURL(blob));
        }
      },
      "image/png",
      1
      // qualityFunc(quality, file)
    );
    // return compressedblob;
  };
  return (
    <Page_Container>
      <div className="w-full flex justify-center px-4 flex-col gap-1">
        {/* <h1 className="text-4xl font-semibold text-blue-700 "> Canvas !</h1>{" "} */}
        {downloadUrl && (
          <button className="mb-1 rounded-sm ring-1 ring-blue-700 mr-1 py-1  bg-blue-500 text-center">
            <a
              role="download button"
              title="download"
              ref={downRef}
              href={downloadUrl}
              download="hp.png"
              className={`h-full w-full px-8 py-1  text-gray-200 font-bold `}
            >
              Download ⬇️
            </a>
          </button>
        )}
        <input
          type="file"
          onChange={async (e) => {
            setEventVal(e);
            // console.dir(e.target.files[0]);
          }}
          className="bg-purple-500  w-max py-1 rounded-sm text-center text-gray-200 font-semibold ps-2 "
        />
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <img ref={showRef} src={downloadUrl} alt="" style={{ width: "100%" }} />
        {eventVal && (
          <div className=" mt-2 ">
            <input
              type="number"
              value={quality}
              onChange={(e) => {
                setQuality(e.target.value);
              }}
              className="outline-none ring-1 ring-blue-700 rounded-full px-2 py-1"
            />
            {quality >= 200 && (
              <span className="text-red-500">
                {" "}
                Quality not grater then 199{" "}
              </span>
            )}
            <button
              className="ml-2 ring-1 ring-blue-800 bg-blue-500 px-3 py-1 text-gray-200 font-bold rounded-md"
              onClick={async () => {
                await compressImage(eventVal);
              }}
            >
              {" "}
              Compress{" "}
            </button>
          </div>
        )}
      </div>
    </Page_Container>
  );
}
