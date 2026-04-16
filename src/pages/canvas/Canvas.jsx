import React, { useRef, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import { useEffect } from "react";

export default function Canvas() {
  const [eventVal, setEventVal] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const canvasRef = useRef(null);
  const downRef = useRef(null);

  //  drawImage function
  const compressImage = async (e) => {
    console.log(canvasRef.current);
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
    );
  };
  return (
    <Page_Container>
      <div className="w-full flex justify-center px-4 flex-col gap-1">
        <h1> Stay tuned!</h1>
        {downloadUrl && (
          <>
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
          </>
        )}

        {eventVal && (
          <button
            onClick={() => compressImage(eventVal)}
            className="mb-1 rounded-sm ring-1 ring-blue-700 mr-1 py-1  bg-blue-500 text-center"
          >
            Show
          </button>
        )}
        <input
          type="file"
          onChange={async (e) => {
            setEventVal(e);
          }}
          className="bg-purple-500  w-max py-1 rounded-sm text-center text-gray-200 font-semibold ps-2 "
        />
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <img src={downloadUrl} alt="" style={{ width: "100%" }} />
      </div>
    </Page_Container>
  );
}
