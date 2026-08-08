export default {
  title: 'Example/Button',
  render: ({ label, primary }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.style.backgroundColor = primary ? '#1ea7fd' : '#ffffff';
    button.style.border = '1px solid #1ea7fd';
    button.style.borderRadius = '3px';
    button.style.color = primary ? '#ffffff' : '#1ea7fd';
    button.style.cursor = 'pointer';
    button.style.fontSize = '14px';
    button.style.padding = '10px 16px';
    return button;
  },
  args: {
    label: 'Button',
    primary: false,
  },
};

export const Primary = {
  args: {
    label: 'Primary button Akhilesh Dwivedi',
    primary: true,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary button Swati Dwivedi',
  },
};
