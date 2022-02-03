import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTemplate } from "@/components";
import {
  MainPage,
  AutoCompletePage,
  ClickToEditPage,
  ModalPage,
  TabPage,
  TagPage,
  TogglePage,
  NotFoundPage,
} from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/Toggle" element={<TogglePage></TogglePage>} />
          <Route path="/Modal" element={<ModalPage></ModalPage>} />
          <Route path="/Tab" element={<TabPage></TabPage>} />
          <Route path="/Tag" element={<TagPage></TagPage>} />
          <Route
            path="/AutoComplete"
            element={<AutoCompletePage></AutoCompletePage>}
          />
          <Route
            path="/ClickToEdit"
            element={<ClickToEditPage></ClickToEditPage>}
          />
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
}

export default App;
