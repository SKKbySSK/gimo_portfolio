import * as React from 'react';
import ThemeManager from './ThemeManager'

interface WorkCardProps {
	icon: any,
	title: string,
	overview: string,
	creationDate: number,
	releaseDate: number,
	madeWith: string,
	language: string,
}

interface WorkCardState {

}

export default class WorkCard extends React.Component<WorkCardProps, WorkCardState> {
	constructor(props: WorkCardProps) {
		super(props)
	}
	
	render() {
		let textColor = ThemeManager.getTextColor();
		
		return (
			<div style={{margin: 10, width: 370, height: 'auto', borderRadius: 20, background: ThemeManager.getCardBackground(), padding: 15, boxShadow: "0px 0px 10px 5px " + ThemeManager.getShadowColor()}}>
				<div style={{display: 'flex', flexDirection: "row", justifyContent: "spaceBetween", alignItems: "center", height: 50, width: "100%"}}>
					<img src={this.props.icon} style={{height: 50, flexBasis: 50, margin: 10, borderRadius: 50}}/>
					<div style={{height: 'auto'}}>
						<h3 style={{margin: 0, color: ThemeManager.getHeaderTextColor()}}>{this.props.title}</h3>
						<h5 style={{margin: 0, color: ThemeManager.getHeaderTextColor()}}>{this.props.creationDate > 0 ? "Created : " + this.props.creationDate : ""}</h5>
						<h5 style={{margin: 0, color: ThemeManager.getHeaderTextColor()}}>{this.props.releaseDate > 0 ? "Released : " + this.props.releaseDate : ""}</h5>
					</div>
				</div>
				<h4 style={{color: textColor}}>{this.props.overview}</h4>
				<p style={{color: textColor}}>{this.props.madeWith + ", " + this.props.language}</p>
			</div>
		);
	}
}
