import { render, fireEvent, waitFor } from "@testing-library/react";
import usersDataMock, { API_DATA_MOCK } from "./__data_mocks__/usersData";
import PersonalProject from "./Wrapper";
import { BASE_URL } from "@constants/api";

const setupRender = () => {
  return render(<PersonalProject initialData={usersDataMock} />);
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(API_DATA_MOCK),
  })
) as jest.Mock;

describe("Personal Project Integration Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should able to render initial data", async () => {
    const { findByText } = setupRender();
    expect(await findByText("herbert.hunt@example.com")).toBeInTheDocument();
  });

  it("should able to type keyword and hit API and keep keyword when navigating / sort page", async () => {
    const { findByTestId, findByText } = setupRender();

    const sampleKeyword = "magic.com";
    const expectedPage = 1;
    const searchKeywordEl = await findByTestId("txtSearchKeyword");

    fireEvent.change(searchKeywordEl, { target: { value: sampleKeyword } });
    expect(await findByText("test@magic.com")).toBeInTheDocument();
    expect(global.fetch).toBeCalledWith(
      `${BASE_URL}&page=${expectedPage}&keyword=${sampleKeyword}&results=5`
    );

    // Test to navigate next page
    fireEvent.click(await findByTestId("pager-2"));
    await waitFor(() => {
      const expectedNextPage = 2;

      expect(global.fetch).toBeCalledWith(
        `${BASE_URL}&page=${expectedNextPage}&keyword=${sampleKeyword}&results=5`
      );
    });

    // Test to sort by username
    fireEvent.click(await findByTestId("tableHeader-username"));
    await waitFor(() => {
      const expectedNextPage = 1;

      expect(global.fetch).toBeCalledWith(
        `${BASE_URL}&page=${expectedNextPage}&keyword=${sampleKeyword}&sortBy=username&sortOrder=ascending&results=5`
      );
    });
  });
});
