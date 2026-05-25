import API from "../services/api"

const UploadBox = () => {

  const uploadPDF = async (e) => {

    const file = e.target.files[0]

    if (!file) return

    const formData = new FormData()

    formData.append(
      "file",
      file
    )

    try {

      await API.post(
        "/upload-pdf",
        formData
      )

      alert(
        "PDF uploaded successfully"
      )

    } catch (error) {

      console.error(error)

      alert("Upload failed")
    }
  }

  return (

    <div>

      <p className="mb-2 text-gray-300">

        Upload Medical PDF

      </p>

      <input

        type="file"

        accept=".pdf"

        onChange={uploadPDF}

        className="
          text-sm
          text-gray-400
        "
      />

    </div>
  )
}

export default UploadBox