import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import classes from './styles.module.css';
import { useState } from "react";

export default function Header({ onSearch }) {
  const [search, setSearch] = useState('');

  return (
    <div className={classes.container}>
      <Input
        placeholder="Busca una ciudad"
        className={classes.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        addonAfter={
          <Button type="text" className={classes.button} icon={<SearchOutlined />} onClick={() => onSearch(search)} />
        }
      />
    </div>
  );
}
