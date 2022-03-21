const { Children } = require("react");
const { default: TableBody } = require("./TableBody");
const { default: TableColumn } = require("./TableColumn");

/*

<Table data, children>
  <TableHeader data, children>
    <TableRow data, children>
    <TableColumn data, chldren/>
    <TableColumn data, chldren/> 
    <TableColumn data, chldren/>  
    <TableRow/>
  </TableHeader>  
  <TableBody children>
  <TableRow>
   <TableColumn />
   <TableColumn /> 
   <TableColumn />  
  <TableRow/>
  </TableBody>  
</Table>

Props that can be React Components:

<RowExpander>
<RowActions>
<ColumnExpander> 
<MultiSelector> 
<ProgressiveRenderer>
<Sorting> 

*/
/*columns={[
  {
    id: 'name',
    header: <LanguageString id={TEXT_NAME} />,
    sortable: true,
    render: renderName,
    className: classes.adminNameColumn,
  },
  {
    id: 'type',
    header: <LanguageString id={TEXT_TYPE} />,
    sortable: true,
    render: (admin) => <LanguageString id={admin.type} />,
  },
]}*/

<TableWrapper onPageChange={onPageChange} nested>
  <Sorting sortBy={sort.by} sortOrder={sort.order} />
  <TableHeader>
    <TableRow>
      <TableColumn>Name</TableColumn>
      <TableColumn>Type</TableColumn>
    </TableRow>
  </TableHeader>
  <TableBody>
    {sortedAdmins.map((admin) => (
      <TableRow key={admin.id}>
        <TableColumn>{admin.displayName}</TableColumn>
        <TableColumn>{admin.type}</TableColumn>
      </TableRow>
    ))}
  </TableBody>
</TableWrapper>;
