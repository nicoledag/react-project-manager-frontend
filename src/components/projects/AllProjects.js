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



const AllProjects = (props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, desc, client_id, target_completion_date, completion_date) {
    return { name, desc, client_id, target_completion_date, completion_date };
  }
  
  console.log("allProject", props)

    let clientName = ''

    const sortedProjects = props ? props.projects.projects.sort(function(a,b){
        let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
        return dateB - dateA;
      }) : null
    // console.log("sortedProjects", sortedProjects)

  const projectList = sortedProjects.map(proj => 
      createData(<Link to={`/projects/${proj.id}`}>{proj.attributes.name}</Link>, `${proj.attributes.desc}`, `${proj.attributes.client_id}`, new Date(`${proj.attributes.target_completion_date}`).toLocaleString().split(',')[0], new Date(`${proj.attributes.completion_date}`).toLocaleString().split(',')[0])
  )

  const classes = useStyles();

  return (
    <div className="data_container">
        <h2>ALL PROJECTS</h2>
        
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="simple table" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Target Completion Date</TableCell>
            <TableCell align="right">Completion Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectList.map(row => (
              console.log("row", row),
              console.log("prop", props),
              clientName = props.clients.clients ? props.clients.clients.filter(client => client.id === row.client_id)[0] : null,
              console.log("client", clientName),
          
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{clientName.attributes.name}</TableCell>
              <TableCell align="right">{row.target_completion_date}</TableCell>
              <TableCell align="right">{row.completion_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

const mapStateToProps = state =>{
    return {
        projects: state.projectReducer,
        clients: state.clientReducer,
    }
}
export default connect(mapStateToProps, null)(AllProjects);