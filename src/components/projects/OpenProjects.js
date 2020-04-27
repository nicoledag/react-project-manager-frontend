import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



const OpenProjects = (props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(id, name, desc, client_id, budget, quantity, end_destination, target_completion_date, completion_date) {
    return { id, name, desc, client_id, budget, quantity, end_destination, target_completion_date, completion_date };
  }
  // console.log("allProject", props)

  const openProjects = props ? props.projects.projects
            .filter(project => {
              return project.attributes.completion_date === null;
            })
            .sort(function(a,b){
              let dateA = new Date(a.attributes.target_completion_date), dateB = new Date(b.attributes.target_completion_date);
              return dateA - dateB;
            }) 
            : null
    // console.log("openProjects", openProjects)


    let clientName = ''

  const openProjectList = openProjects.map(proj => 
    createData(`${proj.id}`, <Link to={`/projects/${proj.id}`}>{proj.attributes.name}</Link>,`${proj.attributes.desc}`, `${proj.attributes.client_id}`, `${proj.attributes.budget}`, `${proj.attributes.quantity}`, `${proj.attributes.end_destination}`,new Date(`${proj.attributes.target_completion_date}`).toLocaleString().split(',')[0], new Date(`${proj.attributes.completion_date}`).toLocaleString().split(',')[0])
  )
  // console.log("openProjectList", openProjectList)

  const classes = useStyles();

  return (
    <div className="data_container">
        <h2>OPEN PROJECTS</h2>
        
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>

      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <TableCell>Project Id</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Budget</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">End Destination</TableCell>
            <TableCell align="right">Target Completion Date</TableCell>
            <TableCell align="right">Completion Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {openProjectList.map(row => (
              // console.log("row", row),
              // console.log("prop", props),
              clientName = props.clients.clients ? props.clients.clients.filter(client => client.id === row.client_id)[0] : null,
              // console.log("client", clientName),
          
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id} </TableCell>
              <TableCell component="th" scope="row">{row.name} </TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{clientName.attributes.name ? clientName.attributes.name : null}</TableCell>
              <TableCell align="right">{row.budget}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.end_destination}</TableCell>
              <TableCell align="right">{row.target_completion_date}</TableCell>
              <TableCell align="right">{row.completion_date === "Invalid Date" ? "OPEN" : row.completion_date}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>

    </div>
  );
}

const mapStateToProps = state =>{
    return {
        projects: state.projectReducer,
        clients: state.clientReducer,
    }
}
export default connect(mapStateToProps, null)(OpenProjects);