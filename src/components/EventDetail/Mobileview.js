import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


class Mobileview extends Component {
  render(){
    const {event} = this.props;
  return (
    <div>
      <ExpansionPanel square >
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>ABOUT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {`About:- ${event.about} ${<br/>} ${event.is_club ?('CLUB:'+event.club):('DEPARTMENT: '+ event.dept)}`}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square >
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>DETAILS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {event.description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square >
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>RULES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {event.rules.split(';').map((str) => (<p>{str}<br /></p>))}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square >
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>REGISTER</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            COMMING SOON
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );}
}

export default Mobileview;