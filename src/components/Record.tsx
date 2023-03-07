import { IRecord } from "../models/Record"

interface RecordProps {
    record : IRecord
}

export function Record({record} : RecordProps) {
    return(
        <div className="record">
            <p className="record__date">{record.date}</p>
            <p className="record__location">{record.location}</p>
            <div className="record-name-btn">
                <div className="record-name-btn__name">
                    <img src={record.img} alt="" />
                    <div>
                        <p className="record-name">{record.name}</p>
                        <p>{record.spec}</p>
                    </div>
                </div>
                <button className="record-btn">Отменить</button>
            </div>
        </div>
    )
}