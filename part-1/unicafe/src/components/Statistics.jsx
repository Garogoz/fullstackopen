import StatisticLine from "./StatisticLine"


const Statistics = ({good, bad, neutral}) => {

    const all = good + neutral + bad
    const positive = (good / all) * 100 || 0
    const average = ((good) + (neutral * 0) - (bad)) / all  || 0

    if(all === 0) {
        return <p><strong>No feedback given</strong></p> 
    }


    return (
        <>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text='good' value={good}/>
                    <StatisticLine text='neutral' value={neutral}/>
                    <StatisticLine text='bad' value={bad}/>
                    <StatisticLine text='all' value={all}/>
                    <StatisticLine text='average' value={average}/>
                    <StatisticLine text='positive' value={positive + '%'}/>
                </tbody>
            </table>
        </>
    )
}

export default Statistics