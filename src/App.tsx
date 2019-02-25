import * as ReactDOM from 'react-dom'
import * as React from "react";
import WorkCard from "./WorkCard";
import Aurora from "./icons/Aurora.png";
import ThemeManager from "./ThemeManager";
import {CSSProperties} from "react";

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)
		
	}
	
	render() {
		let bgColor = ThemeManager.getColorForCurrent("white", "#171717");
		document.body.style.backgroundColor = bgColor;
		
		let careerStyle: CSSProperties = {
			color: ThemeManager.getTextColor(),
			fontSize: 20,
			margin: 10
		};
		
		let trStyle: CSSProperties = {margin: 7};
		
		return (
			<div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
				<h2 style={{color: ThemeManager.getHeaderTextColor()}}>Works</h2>
				<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
					<WorkCard title={"ARDesk(仮)"} icon={Aurora} overview={"ARによる仮想デスクアプリ"} creationDate={2019} releaseDate={0} madeWith={"Native"} language={"Swift"}/>
					<WorkCard title={"Here"} icon={Aurora} language={"TypeScript"} madeWith={"React"} creationDate={2019} releaseDate={2019} overview={"ポートフォリオ用ウェブサイト"}/>
					<WorkCard title={"Aurora for iOS"} icon={Aurora} language={"C#"} madeWith={"Xamarin.Forms"} creationDate={2017} releaseDate={2018} overview={"多機能音楽プレイヤー"}/>
					<WorkCard title={"Aurora for Android"} icon={Aurora} language={"C#"} madeWith={"Xamarin.Forms"} creationDate={2017} releaseDate={2017} overview={"多機能音楽プレイヤー"}/>
					<WorkCard title={"Aurora Local Server"} icon={Aurora} language={"TypeScript"} madeWith={"React"} creationDate={2018} releaseDate={0} overview={"Aurora内蔵のリモート再生用サーバー"}/>
					<WorkCard title={"StudyAlpha"} icon={Aurora} language={"C#"} madeWith={"Xamarin.iOS"} creationDate={2016} releaseDate={2017} overview={"iOS向け学習支援アプリ"}/>
					<WorkCard title={"Limpid Audio Player"} icon={Aurora} language={"C#"} madeWith={"WPF"} overview={"プラグインベースのWindows向け音楽プレイヤー"} creationDate={2014} releaseDate={0}/>
					<WorkCard icon={Aurora} title={"その他"} overview={"自分向けにアプリ等を作成"} creationDate={0} releaseDate={0} madeWith={"React Native, WPF, Xamarin.iOS, Xamarin.Forms, Windows.Forms"} language={""}/>
				</div>
				<h2 style={{color: ThemeManager.getHeaderTextColor()}}>Career</h2>
				<table style={{width: 500, borderCollapse: "separate", borderSpacing: '5px 5px'}}>
					<tr style={trStyle}>
						<td style={careerStyle}>2014</td>
						<td style={careerStyle}>WPFを使ったLimpid Audio Playerを開発</td>
					</tr>
					<tr style={trStyle}>
						<td style={careerStyle}>2016</td>
						<td style={careerStyle}>高専入学。赤点にならないためにStudyAlphaを開発し、リリース</td>
					</tr>
					<tr style={trStyle}>
						<td style={careerStyle}>2017</td>
						<td style={careerStyle}>音楽プレイヤーAuroraの開発を開始。Android版をリリース\n
							第28回全国高専プログラミングコンテスト参加\n
							工華祭の出し物としてWPFを使用した音ゲーを開発</td>
					</tr>
					<tr style={trStyle}>
						<td style={careerStyle}>2018</td>
						<td style={careerStyle}>AuroraのiOS版リリース</td>
					</tr>
					<tr style={trStyle}>
						<td style={careerStyle}>2019</td>
						<td style={careerStyle}></td>
					</tr>
				</table>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('.content'),
);


