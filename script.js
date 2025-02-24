let excuses = {};

// טעינת התירוצים מהקובץ JSON
fetch('large_excuses.json')
    .then(response => response.json())
    .then(data => {
        excuses = data;
    })
    .catch(error => console.error("שגיאה בטעינת התירוצים:", error));

function generateExcuse() {
    const category = document.getElementById("category").value;
    if (!excuses[category] || excuses[category].length === 0) {
        document.getElementById("excuse").textContent = "אין תירוצים זמינים, המצא אחד בעצמך!";
        return;
    }
    const excuseList = excuses[category];
    const randomExcuse = excuseList[Math.floor(Math.random() * excuseList.length)];
    document.getElementById("excuse").textContent = randomExcuse;
}

// העתקת תירוץ ללוח
function copyExcuse() {
    const excuseText = document.getElementById("excuse").textContent;
    navigator.clipboard.writeText(excuseText).then(() => {
        alert("התירוץ הועתק בהצלחה! שתף אותו עם חברים! 😂");
    }).catch(err => console.error("שגיאה בהעתקה:", err));
}
