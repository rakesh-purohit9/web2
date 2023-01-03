import { SelectBox } from "components";
export default {
  title: "webinar/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "CircleBorder15",
  variant: "OutlineBlue200",
  size: "sm",
  className: "w-[300px]",
};
