import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lists = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await axios.get('/file/uploadedfile/');
      setDocuments(response.data);
    };
    fetchDocuments();
  }, []);

  return (
    <div>
      <h2>Uploaded Documents</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <a href={`${process.env.REACT_APP_API_URL}${document.file}`}>
              {document.file.split('/').pop()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;