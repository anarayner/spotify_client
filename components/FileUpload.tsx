import React, {FC, useRef} from 'react';
import styles from '../styles/Create.module.scss'

interface FileUploadProps{
    file: any;
    setFile: Function;
    accept: string;
    children: React.ReactNode;
}

const FileUpload: FC<FileUploadProps> = ({file, setFile, accept, children}) => {
    const ref = useRef()
    return (
        <div className={styles.info} >
            <input type={'file'}
                   accept={accept}
                   style={{display: 'none'}}
            />
            {children}
        </div>
    );
};

export default FileUpload;
