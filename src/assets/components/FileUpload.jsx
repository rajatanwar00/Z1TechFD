import React, { useState } from 'react'
import axios from "axios";

const backendURL='https://z1techbd.onrender.com/upload';


function FileUpload() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!file) return alert("Please select an image!");
  
      const formData = new FormData();
      formData.append("image", file);
  
      setLoading(true);
      try {
        const response = await axios.post(`${backendURL}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Image uploaded and posted to X successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
        alert("Upload failed!");
      }
      setLoading(false);
    };
  
  return (
    <div className="p-4 border rounded w-80 mx-auto">
        <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload & Post"}
      </button>
    </div>    
  )
}

export default FileUpload