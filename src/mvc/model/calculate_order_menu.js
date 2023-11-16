class CalculateOrderMenu {
  calculate(orderMenu) {
    let result = orderMenu.split(',');
    result = result
      .map((menus) => {
        const menu = menus.split('-');
        return { menu: menu[0], cnt: Number(menu[1]) };
      });
    return result;
  }
}

export default CalculateOrderMenu;
