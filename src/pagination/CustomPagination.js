import Pagination from "@material-ui/lab/Pagination"
const CustomPagination = ({setPage ,numOfPages = 10}) => {
    const handlePageChange = (page)  => {
        setPage(page);
        window.scroll(0,0);
    }  
    return (
        <div style = {{
            width : "100%",
            justifyContent: "center",
            display : "flex",
            margin: "50px 0px",
        }}>
          <Pagination 
           count = {numOfPages}
          onChange = {(e) =>  handlePageChange(e.target.textContent)}/>
        </div>
    )
}

export default CustomPagination

