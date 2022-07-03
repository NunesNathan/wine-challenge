import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderRight from 'utils/tests/test';
import FilterRadio from '.';

describe('<FilterRadio />', () => {
  it('should render the radio correctly', () => {
    renderRight(<FilterRadio filter="Acima de R$500" />);

    const radio = screen.getByRole('radio', {
      name: /Acima de R\$500/,
    });
    const filterText = screen.getByText(/Acima de R\$500/);

    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
    expect(filterText).toBeInTheDocument();
  });

  it('should render the label color correctly', () => {
    renderRight(<FilterRadio filter="Acima de R$500" />);

    const filterText = screen.getByText(/Acima de R\$500/);

    expect(filterText).toHaveStyle({
      color: '#1d1d1b',
    });
  });

  it('should got checked correctly', async () => {
    renderRight(<FilterRadio filter="Acima de R$500" />);

    const radio = screen.getByRole('radio', {
      name: /Acima de R\$500/,
    });

    expect(radio).not.toBeChecked();
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('should got unchecked when check another', async () => {
    renderRight(
      <>
        <FilterRadio filter="Acima de R$500" />
        <FilterRadio filter="R$200 A R$500" />
      </>,
    );

    const radio = screen.getByRole('radio', {
      name: /Acima de R\$500/,
    });
    const radio2 = screen.getByRole('radio', {
      name: /R\$200 A R\$500/,
    });

    await userEvent.click(radio);
    expect(radio).toBeChecked();
    await userEvent.click(radio2);
    expect(radio).not.toBeChecked();
    expect(radio2).toBeChecked();
  });
});
