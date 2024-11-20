
import type { Meta, StoryObj } from "@storybook/vue3";
import  TestCompo  from "./TestCompo.vue"



const meta: Meta<typeof TestCompo> = {
	title: 'TestCompo',
  component: TestCompo,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TestCompo>;

export const Default: Story = {
	args: {},
	// async play({ canvasElement }) {
	//     const canvas = within(canvasElement)
	//     const container = canvas.getByTestId('test-compo')

	//     void expect(container).toBeTruthy()
	// },
};
