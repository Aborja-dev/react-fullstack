
export const Searcher = ({value, change})=>{ 
    const container = {
        width: '90%',
        paddingTop: 30,
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    const input = {
        padding: '10px 0 5px 5px',
        fontSize: 18,
        width: '70%',
        borderRadius: 6
    }
    return (
      <div style={container}>
        <p style={ {fontSize: 20}}>Buscar por nombre </p>
        <input style={ input } value={value} onChange={change}/>
      </div>
    )
}