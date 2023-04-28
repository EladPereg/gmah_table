import React, { useState } from 'react'

export default function Table() {
    const [flag, setFlag] = useState(false)
    const [btnFlag,setbtnFlag]=useState(false)
    const [msg,setMsg]=useState(false)
    const[password,setPaswword]=useState('')
    const[showPmsg,setShowPmsg]=useState(true)

    let arr = ['אלעד פרג', ' עמית גהסי', 'שלמה אמסלם', 'רביבו נהוראי','שגב פתיחי']
    let neweArr = []
    while (neweArr.length != arr.length) {
        let rand = Math.floor(Math.random() * arr.length)
        let person = arr[rand]
        if (neweArr.includes(person)) {
            continue
        }
        else {
            neweArr.push(person)
        }
    }

    const refreshTable = () => {
        if (flag === false) {
            setFlag(true)
        }
        else {
            setFlag(false)
        }
    }

    const checkPassword=()=>{
        if(password==='elad moshe'){
            setbtnFlag(false)
          setShowPmsg(true)
        }
        else{
          setShowPmsg(false)
        }
    }
    const showMsg=()=>{
        if(msg===true){
            if(btnFlag===true){
                return <div>
                         <input style={{borderRadius:'25px',height:'25px',width:'190px',textAlign:'center'}} onChange={(e)=>{setPaswword(e.target.value)}} type='password' placeholder='password'/> <br />
                         <button style={{width:'90px',height:'25px',borderRadius:'20px',marginTop:'10px'}} onClick={checkPassword}>GO</button>
            </div>
        }
      }
    }

    const checkPmsg=()=>{
        if(showPmsg===true){
            return null
        }
        else{
            return <p>worng password</p>
        }
    }  

    return (
        <div>
            <button /*disabled={btnFlag? true: false}*/  id='btn' onClick={() => { refreshTable();setbtnFlag(true);setMsg(true) }}>רענן טבלה</button>
            <table >
                <tr >
                    <th>הערות</th>
                    <th>מחלק</th>
                    <th>מס פלאפון</th>
                    <th>כתובת</th>
                    <th>שם ושם משפחה</th>
                    <th>מספר</th>
                </tr>
                <tr>
                    <td>כניסה אחרונה (כתוב פרץ בזהב)</td>
                    <td>{neweArr[0]}</td>
                    <td></td>
                    <td>אפרים צור 13 קומה 3</td>
                    <td>פרץ</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>מול גן חב"ד {<br/>} (2 מנות)</td>
                    <td>{neweArr[1]}</td>
                    <td>052-3305626</td>
                    <td>הרב רחמים בוקרה </td>
                    <td>עמוס</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>קומה אחרונה, דלת מול משפחת בן עזרא</td>
                    <td>{neweArr[2]}</td>
                    <td></td>
                    <td>הרב נורוק 4/ב דירה 14</td>
                    <td>יאשה</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>מתקשרים והוא יורד</td>
                    <td>{neweArr[3]}</td>
                    <td>052-8504687</td>
                    <td>ז'בוטינסקי 11</td>
                    <td>רמי</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>מול המדרגות הדלת הימנית</td>
                    <td>{neweArr[4]}</td>
                    <td></td>
                    <td>יוספטל 3/ג קומה 4</td>
                    <td>מון אמור</td>
                    <td>11</td>
                </tr>
     
            </table>
            <br />
            {/* {showMsg()} */}
            {/* {checkPmsg()} */}
        </div>
    )
}





// טבלה כללית
// import React, { useState } from 'react'

// export default function Table() {
//     const [flag, setFlag] = useState(false)
 
//     let arr = ['אלעד פרג', ' עמית גהסי', 'שלמה אמסלם', 'רביבו נהוראי','לינוי עדשה','אפיק זוזט','אורית אדרי','נתי בן משה','מיתר חורי','שגב פתיחי','עידן הרמבם','עדן כהן']
//     let neweArr = []
//     while (neweArr.length != arr.length) {
//         let rand = Math.floor(Math.random() * arr.length)
//         let person = arr[rand]
//         if (neweArr.includes(person)) {
//             continue
//         }
//         else {
//             neweArr.push(person)
//         }
//     }

//     const refreshTable = () => {
//         if (flag === false) {
//             setFlag(true)
//         }
//         else {
//             setFlag(false)
//         }
//     }
//     return (
//         <div>
//             <button id='btn' onClick={() => { refreshTable() }}>רענן טבלה</button>

//             <table >
//                 <tr >
//                     <th>הערות</th>
//                     <th>מחלק</th>
//                     <th>מס פלאפון</th>
//                     <th>כתובת</th>
//                     <th>שם ושם משפחה</th>
//                     <th>מספר</th>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td>{neweArr[0]}</td>
//                     <td>050-6561226</td>
//                     <td>הרב פינטו 4/11</td>
//                     <td>דורון גז</td>
//                     <td>1</td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td>{neweArr[1]}</td>
//                     <td>053-7887702</td>
//                     <td>אפרים צור 13/6</td>
//                     <td>משה לוטטי</td>
//                     <td>2</td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td>{neweArr[2]}</td>
//                     <td>052-6976164</td>
//                     <td>בית"ר 3/1</td>
//                     <td>דני בוריטוב</td>
//                     <td>3</td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td>{neweArr[3]}</td>
//                     <td>052-5693739</td>
//                     <td>ישעיהו 14  (שיכונים)</td>
//                     <td>מוריס אבוטבול</td>
//                     <td>4</td>
//                 </tr>
//                 <tr>
//                     <td>קומה 1</td>
//                     <td>{neweArr[4]}</td>
//                     <td>053-4110288</td>
//                     <td>שי עגנון 4/35</td>
//                     <td>רבקה כהן</td>
//                     <td>5</td>
//                 </tr>
//                 <tr>
//                     <td>כניסה אחרונה (כתוב פרץ בזהב)</td>
//                     <td>{neweArr[5]}</td>
//                     <td></td>
//                     <td>אפרים צור 13 קומה 3</td>
//                     <td>משפחת פרץ</td>
//                     <td>6</td>
//                 </tr>
//                 <tr>
//                     <td>מתקשרים והיא יורדת</td>
//                     <td>{neweArr[6]}</td>
//                     <td>053-6667896</td>
//                     <td>בר כוכבא 35</td>
//                     <td>אליסיה</td>
//                     <td>7</td>
//                 </tr>
//                 <tr>
//                     <td>מול גן חב"ד {<br/>} (2 מנות)</td>
//                     <td>{neweArr[7]}</td>
//                     <td></td>
//                     <td>הרב רחמים בוקרה </td>
//                     <td>עמוס</td>
//                     <td>8</td>
//                 </tr>
//                 <tr>
//                     <td>קומה אחרונה, דלת מול משפחת בן עזרא</td>
//                     <td>{neweArr[8]}</td>
//                     <td></td>
//                     <td>הרב נורוק 4/ב דירה 14</td>
//                     <td></td>
//                     <td>9</td>
//                 </tr>
//                 <tr>
//                     <td>מתקשרים והוא יורד</td>
//                     <td>{neweArr[9]}</td>
//                     <td>052-8504687</td>
//                     <td>ז'בוטינסקי 11</td>
//                     <td>רמי גולן</td>
//                     <td>10</td>
//                 </tr>
//                 <tr>
//                     <td>מול המדרגות הדלת הימנית</td>
//                     <td>{neweArr[11]}</td>
//                     <td></td>
//                     <td>יוספטל 3/ג קומה 4</td>
//                     <td></td>
//                     <td>11</td>
//                 </tr>
//                 <tr>
//                     <td></td>
//                     <td>{neweArr[10]}</td>
//                     <td>052-6073071</td>
//                     <td>דוד ברגר 7/8</td>
//                     <td>ז'אנה קונדרשטיין</td>
//                     <td>12</td>
//                 </tr>
//             </table>
//             <br />
//         </div>
//     )
// }

