import React from "react";

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ files, onDelete }) => (
  <Container>
    <FileInfo>
          <Preview src={files[files.length-1].preview} />
          <div>
            <strong>{files[files.length-1].name}</strong>
            <span>
              {files[files.length-1].readableSize}{" "}
              {/* {!files[files.length-1].url && 
              (
                <button onClick={() => onDelete(files[files.length-1].id)} className="deleteBtn">
                  Excluir
                </button>
              )
              } */}
            </span>
          </div>
        </FileInfo>
  </Container>
);

export default FileList;