import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import MUIDataTable from "mui-datatables";

const SearchProject = (props) => {
    const columns = [
        {
         name: "name",
         label: "Name",
        },
        {
         name: "description",
         label: "Description",
        },
        {
         name: "client",
         label: "Client",
        },
        {
         name: "budget",
         label: "Budget",
        },
        {
        name: "quantity",
        label: "Quantity",
        },
        {
        name: "end_destination",
        label: "End Destination",
        },
        {
        name: "target_completion_date",
        label: "Target Completion Date",
        },
        {
        name: "completion_date",
        label: "Completion Date",
        },
       ];

      //  console.log(props)

    const sortedProjects = props ? props.projects.projects.sort(function(a,b){
        let dateA = new Date(a.attributes.created_at), dateB = new Date(b.attributes.created_at);
        return dateB - dateA;
      }) : null
    //  console.log("sortedProjects", sortedProjects)
    
//    let clientName = props.clients.clients ? props.clients.clients.filter(client => client.id === row.client_id)[0] : null


  const data = sortedProjects.map(proj => 
  
    [<Link to={`/projects/${proj.id}`}>{proj.attributes.name}</Link>,
        `${proj.attributes.desc}`, 
        `${proj.attributes.client_id}`, 
        `${proj.attributes.budget}`, 
        `${proj.attributes.quantity}`, 
        `${proj.attributes.end_destination}`, 
        `${proj.attributes.target_completion_date}`, 
        `${proj.attributes.completion_date}` === 'null' ? 'OPEN' : `${proj.attributes.completion_date}`  , ]
  )

//   console.log("projectList", projectList)

           
       const options = {
         filterType: 'checkbox',
       };
       
        return ( 
        <div className="table-container">
          <div className="">
                <MUIDataTable
                title={"All Projects"}
                data={data}
                columns={columns}
                options={options}
                />
            </div>
        </div> );

}
 
const mapStateToProps = state => {
    return {
        client: state.clientReducer,
        projects: state.projectReducer,
    }
}
export default connect(mapStateToProps, null)(SearchProject);
