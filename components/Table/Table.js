import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/tableStyle.js";

export default function CustomTable(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_WorkItemid`}
                >
                  {prop.WorkItemid}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_title`}>
                  {prop.title}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_type`}>
                  {prop.type}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_Corpnon`}>
                  {prop.Corpnon}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_projectcategory`}
                >
                  {prop.projectcategory}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_financialvalue`}
                >
                  {prop.financialvalue}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_experiencevalue`}
                >
                  {prop.experiencevalue}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_rrsvalue`}
                >
                  {prop.rrsvalue}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_score`}>
                  {prop.score}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_sprints`}>
                  {prop.sprints}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_allocation`}
                >
                  {prop.allocation}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_designeffort`}
                >
                  {prop.designeffort}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  key={`${key}_objective`}
                >
                  {prop.objective}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}_kr`}>
                  {prop.kr}
                </TableCell>
                <TableCell className={classes.tableCell} key={`${key}`}>
                  <a href={`api/update-info/${key}`}>Update</a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.objectOf)),
};
