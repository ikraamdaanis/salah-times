const salahTimesTimes = document.querySelector('.salah-times-times')

let [day, month, year] = new Date().toLocaleDateString('en-GB').split('/')

document.querySelector('.date').textContent = `${day}/${month}/${year}`

const getSalahTimes = async () => {
  const API_KEY = ''
  try {
    const fetchData = await fetch(
      `https://www.londonprayertimes.com/api/times/?format=json&key=${API_KEY}&24hours=true`
    )
    const dataJSON = await fetchData.json()
    // console.log(dataJSON)
    const timeNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']
    const times = []
    timeNames.forEach(time => {
      times.push(dataJSON[time])
    })

    const timestamps = []
    times.forEach(time => {
      timestamps.push(new Date(`${year}-${month}-${day}t${time}:00`).getTime())
    })

    times.forEach(time => {
      const li = document.createElement('li')
      li.textContent = time
      salahTimesTimes.appendChild(li)
    })

    document.querySelector('.container').style.opacity = '1'
  } catch (error) {
    console.error(error)
  }
}

getSalahTimes()