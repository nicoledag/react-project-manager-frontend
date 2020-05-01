import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import MUIDataTable from "mui-datatables";

const SearchProject = (props) => {
    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "description",
         label: "Description",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "client",
         label: "Client",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "budget",
         label: "Budget",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
        name: "quantity",
        label: "Quantity",
        options: {
            filter: true,
            sort: false,
        }
        },
        {
        name: "quantity",
        label: "Quantity",
        options: {
            filter: true,
            sort: false,
        }
        },
        {
        name: "end_destination",
        label: "End Destination",
        options: {
            filter: true,
            sort: true,
        }
        },
        {
            name: "target_completion_date",
            label: "Target Completion Date",
            options: {
                filter: true,
                sort: false,
            
            }
            },
            {
            name: "completion_date",
            label: "Completion Date",
            options: {
                filter: true,
                sort: false,
            }
            },
       ];
       
       const data = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
       ];

       
       
       const options = {
         filterType: 'checkbox',
       };
       
        return ( 
        <div className="search-container">
            <div>
                <MUIDataTable
                title={"Open Projects"}
                data={data}
                columns={columns}
                options={options}
                />
            </div>
        </div> );

}
 
const mapStateToProps = state => {
    return {
        comment: state.commentReducer,
    }
}
export default connect(mapStateToProps, null)(SearchProject);
