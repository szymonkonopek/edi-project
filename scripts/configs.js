function getData(){
    //============================== JĘZYKI ===========================
    const language_data = {labels: languages.items,
        datasets: [{
        label: '# of Votes',
        data: languages.count,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
        }]
    }
    
    const lang_config = {
        type: 'pie',
        data: language_data,
        options: {
            scales: {
            }
        }
    }
//================================================================================
// ============================== MIASTA =======================================
const city_data = {labels: city.items,
    datasets: [{
    label: '# of Votes',
    data: city.count,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 2
    }]
}

const city_config = {
    type: 'pie',
    data: city_data,
    options: {
        scales: {
        }
    }
}

//=======================================================================
//============================ WIEK =====================================

const age_data = {labels: age.count,
    datasets: [{
    label: 'Age',
    data: age.items,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 2
    }]
}

const age_config = {
    type: 'line',
    data: age_data,
    options: {
        scales: {
        }
    }
}






    return {"language":lang_config,"city":city_config,"age":age_config}
}