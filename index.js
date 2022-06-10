// code your solution here
/*function superbowlWin(record) {
    //return (element % 2 === 1);
    return (record === '2015')
}
record.find(superbowlWin);

function superbowlWin(record) {
    //return (element % 2 === 1);
    return (record === 'W')
  }


superbowlWin = (record) => {
    const outcome = record.find( record => record.outcome === "W" );
}

superbowlWin = (record) => {
    return !!outcome ? outcome.year : undefined;
}

superbowlWin = (record) => {
    const outcome = record.find( record => record.outcome === "W" );
}
superbowlWin = (sadReality) => {
    const outcome = sadReality.find( sadReality => sadReality.outcome === "N/A" );
}*/

superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
}