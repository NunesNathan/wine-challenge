import S from './styles';

export default function SearchIcon() {
  return (
    <S>
      <svg
        role="img"
        aria-label="Icone de lupa para pesquisas."
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 57"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.042 14.7474c-5.6839 0-10.2917 4.6077-10.2917 10.2917 0 5.6839 4.6078 10.2916 10.2917 10.2916s10.2917-4.6077 10.2917-10.2916c0-5.684-4.6078-10.2917-10.2917-10.2917ZM12.167 25.0391c0-6.5584 5.3166-11.875 11.875-11.875s11.875 5.3166 11.875 11.875c0 2.9949-1.1087 5.7309-2.9381 7.8198l10.6202 10.6202c.3091.3091.3091.8104 0 1.1196-.3092.3091-.8104.3091-1.1196 0L31.8592 33.9784c-2.0887 1.8279-4.8236 2.9357-7.8172 2.9357-6.5584 0-11.875-5.3167-11.875-11.875Z"
          fill="#555"
        />
        <circle cx="28" cy="28.9974" r="27" stroke="#555" strokeWidth="2" />
      </svg>{' '}
    </S>
  );
}
