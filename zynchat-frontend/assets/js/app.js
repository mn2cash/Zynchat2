const activateSidebarItems = () => {
  const items = document.querySelectorAll('.chat-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  activateSidebarItems();
});
