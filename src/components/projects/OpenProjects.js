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
  
  function createData(name, desc, client_id, target_completion_date, completion_date) {
    return { name, desc, client_id, target_completion_date, completion_date };
  }
  
  //   TO DO: NEED TO SORT ALL PROJECTS

  console.log("openProject", props)

  const clientName = props ? props.clients.clients.map(client => {
    return `${client.attributes.name}`
  } 
  ) : null
    

//   console.log("clientName", clientName)


const openProjects = props ? props.projects.projects
            .filter(project => {
              return project.completion_date === null;
            })
            .sort(function(a,b){
              let dateA = new Date(a.target_completion_date), dateB = new Date(b.target_completion_date);
              return dateA - dateB;
            }) 
            : null
    console.log("openProjects", openProjects)

    // const sortedProjects = props ? props.projects.projects.sort(function(a,b){
    //     let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
    //     return dateB - dateA;
    //   }) : null
    // console.log("sortedProjects", sortedProjects)

//   const projectList = sortedProjects.map(proj => 
//       createData(<Link to={`/projects/${proj.id}`}>{proj.attributes.name}</Link>, `${proj.attributes.desc}`, `${proj.attributes.client_id}`, new Date(`${proj.attributes.target_completion_date}`).toLocaleString().split(',')[0], new Date(`${proj.attributes.completion_date}`).toLocaleString().split(',')[0])
//   )


  // console.log("projectList",projectList)

  
  const classes = useStyles();

  return (
    <div className="data_container">
        <h2>OPEN PROJECTS</h2>
        
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
          {/* {projectList.map((row) => (

            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{row.client_id}</TableCell>
              <TableCell align="right">{row.target_completion_date}</TableCell>
              <TableCell align="right">{row.completion_date}</TableCell>
            </TableRow>
          ))} */}
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
export default connect(mapStateToProps, null)(OpenProjects);