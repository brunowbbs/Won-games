import { useState } from "react";

import Button from "../Button";
import Checkbox from "../Checkbox";
import Heading from "../Heading";
import Radio from "../Radio";
import * as S from "./styles";
import { ExplorerSidebarProps } from "./types";

const ExplorerSidebar = ({
  items,
  initialValues = {},
  onFilter,
}: ExplorerSidebarProps) => {
  const [values, setValues] = useState(initialValues);

  const handleFilter = () => {
    onFilter(values);
  };

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }));
  };

  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <div key={`explorer-sidebar-${index}`}>
          <Heading lineBottom lineColor="secondary">
            {item.title}
          </Heading>
          {item.type === "checkbox" &&
            item.fields.map((field, index) => (
              <Checkbox
                key={`explorer-sidebar-check-${index}`}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(v) => handleChange(field.name, v)}
              />
            ))}

          {item.type === "radio" &&
            item.fields.map((field, index) => (
              <Radio
                key={`explorer-sidebar-radio-${index}`}
                id={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}

      {/* <Heading lineBottom lineColor="secondary">
        Price
      </Heading>

      <Checkbox name="under 50" label="Under $50" labelFor="under 50" />
      <Checkbox name="under 100" label="Under $100" labelFor="under 100" />
      <Checkbox name="under 150" label="Under $150" labelFor="under 150" />
      <Checkbox name="under 200" label="Under $200" labelFor="under 200" />
      <Checkbox name="free" label="Free" labelFor="free" />
      <Checkbox name="discounted" label="Discounted" labelFor="discounted" />

      <Heading lineBottom lineColor="secondary">
        Sort by
      </Heading>

      <Radio
        id="high-to-low"
        name="sort-by"
        label="High to low"
        labelFor="high-to-low"
        value="high-to-low"
      />
      <Radio
        id="low-to-high"
        name="sort-by"
        label="Low to High"
        labelFor="low-to-high"
        value="low-to-high"
      />

      <Heading lineBottom lineColor="secondary">
        System
      </Heading>
      <Checkbox name="windows" label="Windows" labelFor="windows" />
      <Checkbox name="mac" label="Mac" labelFor="mac" />
      <Checkbox name="linux" label="Linux" labelFor="linux" />

      <Heading lineBottom lineColor="secondary">
        Genrer
      </Heading>
      <Checkbox name="action" label="Action" labelFor="action" />
      <Checkbox name="adventure" label="Adventure" labelFor="adventure" />
      <Checkbox name="fps" label="FPS" labelFor="fps" />
      <Checkbox name="mmorpg" label="MMORPG" labelFor="mmorpg" /> */}

      <Button fullWidth size="medium" onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  );
};

export default ExplorerSidebar;
