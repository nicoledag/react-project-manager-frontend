import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
 
  console.log("props", props);


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


  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Budget', field: 'budget' },
      { title: 'Quantity', field: 'quantity' },
      { title: 'End Destination', field: 'end_destination' },
      { title: 'Target Completion Date', field: 'target_completion_date' },
      { title: 'Completion Date', field: 'completion_date' },
     
      // {
      //   title: 'Birth Place, type: 'numeric'',
      //   field: 'birthCity',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ],
    


    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}