import { useEffect, useState } from 'react'

function DailyMacrosCount() {



    return (
        <div className="container text-center mt-5" dir="rtl">
            <div className="row">
                <div className="col-2">
                    חלבון
                </div>
                <div className="col-2">
                    120
                </div>
                <div className="col-2">
                    <input pattern="[0-9]*" type="tel"  />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    פחמימה
                </div>
                <div className="col-2">
                    230
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    שומן
                </div>
                <div className="col-2">
                    80
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    קלוריות
                </div>
                <div className="col-2">
                    2800
                </div>
            </div>
        </div>
    );
}

export default DailyMacrosCount;
