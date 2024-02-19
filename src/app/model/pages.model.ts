export class scoredetails {   
    matchHeader = new matchHeader();    
    commentaryList = new commentary();
    miniscore = new miniscore();
    responseLastUpdated?: number;

}
export class teamdeatils{
    id?:number;
    name?:string;
    playerDetails:any[] =[];
    shortName?:string;
}

export class result{
        winningTeam?: string;
        winByRuns?: boolean;
        winByInnings?: boolean;
        resultType?:string;
        winningteamId?:number;
}
export class matchTeamInfo{
        battingTeamId?:number;
        battingTeamShortName?:string;
        bowlingTeamId?:number;
        bowlingTeamShortName?:string;
}
export class commentary{    
        commText?: string;
        ballNbr?: string;
        overNumber?: string
        inningsId?:number
        event?:string
        batTeamName?:string;    
}
export class miniscore{
    lastWicket?:string;
    overs?:string;
    recentOvsStats?:string;
    remRunsToWin?:number;
    requiredRunRate?:number;
    matchScoreDetails = new matchScoreDetails();
    status?:string;
    inningsId?:number;
    batTeam = new batTeam();
    batsmanStriker = new playingbatsman();
    batsmanNonStriker = new playingbatsman();
    bowlerStriker = new bowlerStriker()
    currentRunRate?:number;
    latestPerformance = new latestPerformance()

}
export class matchHeader{

    matchType?:string;
    seriesDesc?:string;
    status?:string
    complete? :boolean;
    year?:number;
    team1 = new teamdeatils();
    team2 = new teamdeatils();
    result = new result();
    matchDescription?:string;
}


export class matchScoreDetails{
    constructor (){
        
    }
    matchId?:number;
    matchTeamInfo= new matchTeamInfo();
    inningsScoreList = new inningsScoreList();
    tossResults = new tossResults();
    isMatchNotCovered?:string;
    matchFormat?:string;
    state?:string;
    customStatus?:string;
    highlightedTeamId?:number;
}


export class inningsScoreList{
    inningsId?:number;
    batTeamId?:number;
    batTeamName?:string;
    score?:number;
    wickets?:number;
    overs?:number;
    isDeclared?:boolean;
    isFollowOn?:boolean;
}

export class tossResults{
    tossWinnerId?: number;
    tossWinnerName?: string;
    decision?:string;
}

export class batTeam{
    teamId?: number;
    teamScore?: number;
    teamWkts?: number;
}
export class playingbatsman{
    batBalls?:number;
    batDots?:number;
    batFours?:number;
    batId?:number;
    batName?:string;
    batMins?:number;
    batRuns?:number;
    batSixes?:number;
    batStrikeRate?:number;
}
export class bowlerStriker{
    bowlId?:number;
    bowlName?:string;
    bowlMaidens?:number;
    bowlNoballs?:number;
    bowlOvs?:number;
    bowlRuns?:number;
    bowlWides?:number;
    bowlWkts?:number;
    bowlEcon?:number;
}

export class latestPerformance{
        runs?:number;
        wkts?:number;
        label?:string;
    }    
export class sidebar{
    
}

export class players{
    id:number =0;
    playerName?:string;
    playerType?:string;
    AutionCredit?:string;
    BatingHand?:string;
    BlowingHand?:string;
    teams?:string
    city?:string;
}

export class teams{
    id:number =0;
    teamName?:string;
    teamType?:string;
    Caption?:string;
    vicecaption?:string;
    city?:string;
}