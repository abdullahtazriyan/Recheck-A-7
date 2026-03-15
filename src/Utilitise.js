const setCoin = () => {
    const avalableCoin = document.getElementById('avalable-coin');
    const avalableCoinInner = document.getElementById('avalable-coin').innerText
    const finalCoin = parseInt(avalableCoinInner)
    document.getElementById('free-credit').addEventListener('click', () => {
        avalableCoin.innerText = 35000 + finalCoin
    })
}

const btn = () => {
    document.getElementById('available').addEventListener('click', () => {
        const first = document.getElementById('Available-Player')
        first.classList.remove('hidden')
        document.getElementById('selected-player').classList.add('hidden')
        document.getElementById('selected').classList.remove('bg-[#E7FE29]')
        document.getElementById('available').classList.add('bg-[#E7FE29]')

    })

    document.getElementById('selected').addEventListener('click', () => {
        const second = document.getElementById('selected-player')
        second.classList.remove('hidden')
        document.getElementById('Available-Player').classList.add('hidden')
        document.getElementById('available').classList.remove('bg-[#E7FE29]')
        document.getElementById('selected').classList.add('bg-[#E7FE29]')


    })
}

const addPlayer = () => {
    const first = document.getElementById('Available-Player')
    first.classList.remove('hidden')
    document.getElementById('selected-player').classList.add('hidden')
}

const remove = () => {
    const sp = document.getElementById('SP')
    sp.classList.add('hidden')
}

export { setCoin, btn, addPlayer, remove }