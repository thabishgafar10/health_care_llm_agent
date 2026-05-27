import {
  useRef,
  useState,
  useEffect
} from "react"

import API from "../services/api"

const UploadBox = () => {

  const pdfInputRef =
    useRef(null)

  const imageInputRef =
    useRef(null)

  const dropdownRef =
    useRef(null)

  const [loading, setLoading] =
    useState(false)

  const [showMenu, setShowMenu] =
    useState(false)

  // CLOSE POPUP ON OUTSIDE CLICK

  useEffect(() => {

    const handleOutsideClick = (
      event
    ) => {

      if (

        dropdownRef.current &&

        !dropdownRef.current.contains(
          event.target
        )
      ) {

        setShowMenu(false)
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    )

    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      )
    }

  }, [])

  // HANDLE UPLOAD

  const handleUpload = async (
    file
  ) => {

    if (!file) return

    const formData =
      new FormData()

    formData.append(
      "file",
      file
    )

    try {

      setLoading(true)

      await API.post(

        "/upload-pdf",

        formData,

        {
          headers: {

            "Content-Type":
            "multipart/form-data"
          }
        }
      )

      alert(
        "Upload successful"
      )

    } catch (error) {

      console.error(error)

      alert("Upload failed")

    } finally {

      setLoading(false)

      setShowMenu(false)
    }
  }

  return (

    <div
      className="relative"
      ref={dropdownRef}
    >

      {/* PLUS BUTTON */}

      <button

        onClick={() =>
          setShowMenu(!showMenu)
        }

        className="
          w-11
          h-11
          rounded-full
          bg-[#eef3f8]
          hover:bg-[#e3edf5]
          transition
          flex
          items-center
          justify-center
          text-[#69d2e7]
          text-2xl
          border
          border-[#dbe4f0]
          shadow-sm
        "
      >

        +

      </button>

      {/* POPUP MENU */}

      {
        showMenu && (

          <div
            className="
              absolute
              bottom-14
              left-0
              bg-white
              border
              border-[#dbe4f0]
              rounded-2xl
              shadow-xl
              w-[200px]
              p-2
              z-50
            "
          >

            {/* PDF OPTION */}

            <button

              onClick={() =>
                pdfInputRef.current.click()
              }

              className="
                w-full
                text-left
                px-4
                py-3
                rounded-xl
                hover:bg-[#f5f7fb]
                transition
                text-[#1f2937]
                flex
                items-center
                gap-3
              "
            >

              <span>📄</span>

              <span>
                Upload PDF
              </span>

            </button>

            {/* IMAGE OPTION */}

            <button

              onClick={() =>
                imageInputRef.current.click()
              }

              className="
                w-full
                text-left
                px-4
                py-3
                rounded-xl
                hover:bg-[#f5f7fb]
                transition
                text-[#1f2937]
                flex
                items-center
                gap-3
              "
            >

              <span>🖼️</span>

              <span>
                Upload Image
              </span>

            </button>

          </div>
        )
      }

      {/* HIDDEN PDF INPUT */}

      <input

        ref={pdfInputRef}

        type="file"

        accept=".pdf"

        hidden

        onChange={(e) =>
          handleUpload(
            e.target.files[0]
          )
        }
      />

      {/* HIDDEN IMAGE INPUT */}

      <input

        ref={imageInputRef}

        type="file"

        accept="image/*"

        hidden

        onChange={(e) =>
          handleUpload(
            e.target.files[0]
          )
        }
      />

      {/* LOADING */}

      {
        loading && (

          <div
            className="
              absolute
              left-14
              top-2
              text-sm
              text-[#69d2e7]
              whitespace-nowrap
            "
          >

            Uploading...

          </div>
        )
      }

    </div>
  )
}

export default UploadBox