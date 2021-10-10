import { useEffect, useState } from 'react'

function DailyMacrosCount() {

    let defaultProtein = "161"
    let defaultCarbs = "351"
    let defaultFat = "75"
    let defaultCalories = defaultProtein * 4 + defaultCarbs * 4 + defaultFat * 9

    let defaultDailyStats = {
        protein: defaultProtein,
        carbs: defaultCarbs,
        fat: defaultFat,
        calories: defaultCalories
    }

    let [protein, setProtein] = useState("")
    let [proteinConsumed, setProteinConsumed] = useState("")
    let [carbs, setCarbs] = useState("")
    let [carbsConsumed, setCarbsConsumed] = useState("")
    let [fat, setFat] = useState("")
    let [fatConsumed, setFatConsumed] = useState("")

    useEffect(() => {
        let now = new Date().setHours(0, 0, 0, 0)
        let lastSavedDate = localStorage.getItem("adamLastDate")
        if (!lastSavedDate) {
            localStorage.setItem("adamLastDate", now)
        }
        else {
            let relevantStats
            if (now > lastSavedDate) {
                localStorage.setItem("adamStats", JSON.stringify(defaultDailyStats))
            }
            else if (!localStorage.getItem("adamStats")) {
                localStorage.setItem("adamStats", JSON.stringify(defaultDailyStats))
            }

            relevantStats = localStorage.getItem("adamStats")
            relevantStats = JSON.parse(relevantStats)
            setProtein(relevantStats.protein)
            setCarbs(relevantStats.carbs)
            setFat(relevantStats.fat)
        }

    }, [])

    function updateLocalStorage(name, value) {
        let relevantStats = localStorage.getItem("adamStats")
        relevantStats = JSON.parse(relevantStats)
        relevantStats[name] = value
        localStorage.setItem("adamStats", JSON.stringify(relevantStats))
    }

    function reset() {
        localStorage.setItem("adamStats", JSON.stringify(defaultDailyStats))
        let relevantStats = localStorage.getItem("adamStats")
        relevantStats = JSON.parse(relevantStats)
        setProtein(relevantStats.protein)
        setCarbs(relevantStats.carbs)
        setFat(relevantStats.fat)
    }

    return (
        <div className="container text-center mt-5" dir="rtl">
            <div className="row">
                <div className="col-2">
                    {(protein * 1) <= 0 ? <label className="text-success">חלבון</label> : <label>חלבון</label>}
                </div>
                <div className="col-2">
                    {protein}
                </div>
                <div className="col-2">
                    <input pattern="[0-9]*" type="tel" name="proteinConsumed" className="form-control" value={proteinConsumed} onChange={(ev) => { setProteinConsumed(ev.target.value) }} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" name="protein" onClick={(ev) => { setProtein(protein - proteinConsumed); updateLocalStorage("protein", protein - proteinConsumed); setProteinConsumed("") }}>נאכל</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    {(carbs * 1) <= 0 ? <label className="text-success">פחמימה</label> : <label>פחמימה</label>}
                </div>
                <div className="col-2">
                    {carbs}
                </div>
                <div className="col-2">
                    <input pattern="[0-9]*" type="tel" name="carbsConsumed" className="form-control" value={carbsConsumed} onChange={(ev) => { setCarbsConsumed(ev.target.value) }} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" name="carbs" onClick={(ev) => { setCarbs(carbs - carbsConsumed); updateLocalStorage("carbs", carbs - carbsConsumed); setCarbsConsumed("") }}>נאכל</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    {(fat * 1) <= 0 ? <label className="text-success">שומן</label> : <label>שומן</label>}
                </div>
                <div className="col-2">
                    {fat}
                </div>
                <div className="col-2">
                    <input pattern="[0-9]*" type="tel" name="fatConsumed" className="form-control" value={fatConsumed} onChange={(ev) => { setFatConsumed(ev.target.value) }} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" name="fat" onClick={(ev) => { setFat(fat - fatConsumed); updateLocalStorage("fat", fat - fatConsumed); setFatConsumed("") }}>נאכל</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    {(protein * 4) + (carbs * 4) + (fat * 9) <= 0 ? <label className="text-success">קלוריות</label> : <label >קלוריות</label>}
                </div>
                <div className="col-2">
                    {(protein * 4) + (carbs * 4) + (fat * 9)}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger" onClick={reset}>איפוס</button>
                </div>
            </div>
        </div>
    );
}

export default DailyMacrosCount;
