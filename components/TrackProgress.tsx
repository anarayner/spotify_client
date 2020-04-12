import React, {FC} from 'react';

interface TrackProgressProps{
    left: number;
    right: number;
    onChange: (e: any)=> void;
}

const TrackProgress: FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div >
             <input type={'range'} min={left} max={right} onChange={onChange} value={left}/>
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
