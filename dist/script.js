const Btn = props => {
  const { onPlusClick } = props;
  return /*#__PURE__*/(
    React.createElement("button", { className: "button", onClick: onPlusClick }, "Add Filter"));



};

const Dropdown = props => {
  const [property, setProperty] = React.useState(null);
  const [condition, setCondition] = React.useState(null);
  const [value, setValue] = React.useState(null);

  const properties = ["Age", "Address", "Name", "Email", "Phone", "Id"];
  const conditions = [
  "Equals to",
  "Greater than equal to",
  "Less than equal to"];


  return /*#__PURE__*/(
    React.createElement("div", { className: "dropdown-container" }, /*#__PURE__*/
    React.createElement("div", {
      className: "dropdown dropdown_1",
      onClick: e => {
        setProperty(e.target.value);
        console.log(e.target.innerText);
      } },

    properties.map((prop, idx) => {
      return /*#__PURE__*/React.createElement("button", { className: "option" }, prop);
    })),

    property !== null ? /*#__PURE__*/
    React.createElement("div", { className: "dropdown dropdown_2" },
    conditions.map((cond, idx) => {
      return /*#__PURE__*/(
        React.createElement(React.Fragment, null, /*#__PURE__*/
        React.createElement("label", { className: "label", key: idx }, /*#__PURE__*/
        React.createElement("input", {
          type: "radio",
          checked: condition === cond,
          onChange: e => setCondition(cond) }),

        cond),

        condition && condition === cond ? /*#__PURE__*/
        React.createElement("input", {
          className: "text",
          type: "text",
          placeholder: "enter value",
          onChange: e => setValue(e.target.value) }) :

        null));


    }), /*#__PURE__*/
    React.createElement("div", { className: "pButtonProp" }, /*#__PURE__*/
    React.createElement("button", {
      className: "pButton1",
      onClick: () => {
        setProperty(null);
        props.closeDropdown();
      } }, "Cancel"), /*#__PURE__*/



    React.createElement("button", { className: "pButton2", onClick: () => {} }, "Save Filter"))) :




    null));


};

const App = () => {
  const [dropdown, setDropdown] = React.useState(false);

  function onPlusClick() {
    setDropdown(!dropdown);
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "parent" }, /*#__PURE__*/
    React.createElement("div", { className: "div1" }, /*#__PURE__*/
    React.createElement(Btn, null)), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Btn, null)), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Btn, null)), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Btn, null)), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Btn, { onPlusClick: onPlusClick }),
    dropdown ? /*#__PURE__*/
    React.createElement(Dropdown, { closeDropdown: () => setDropdown(false) }) :
    null)));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("container"));