import { FC } from 'react';

export interface Header {
  title: string;
  key: string;
}

interface IDatatableProps {
  headers: Header[];
  rows: any[];
}

const Datatable: FC<IDatatableProps> = (props) => {
  return (
    <div className={`w-3/4 lg:w-1/2 grid grid-cols-${props.headers.length}`}>
      {props.headers.map((header, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className="px-8 text-center py-5 bg-light-surface-variant border-[0.3px] border-r-0 border-light-outline rounded-tl-lg-c"
            >
              {header.title}
            </div>
          );
        }
        return (
          <div
            key={index}
            className="px-8 text-center py-5 bg-light-surface-variant border-[0.3px] border-light-outline rounded-tr-lg-c"
          >
            {header.title}
          </div>
        );
      })}

      {props.rows.map((row, _index) => {
        if (_index === props.rows.length - 1) {
          return (
            <>
              {props.headers.map((header, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className="px-8 text-center border-[0.3px] border-r-0 border-t-0 py-5 rounded-bl-lg-c"
                    >
                      {row[header.key]}
                    </div>
                  );
                }
                return (
                  <div
                    key={index}
                    className="px-8 text-center border-[0.3px] border-t-0 py-5 rounded-br-lg-c"
                  >
                    {row[header.key]}
                  </div>
                );
              })}
            </>
          );
        }
        return (
          <>
            {props.headers.map((header, index) => {
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className="px-8 text-center border-[0.3px] border-r-0 border-t-0 py-5"
                  >
                    {row[header.key]}
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className="px-8 text-center border-[0.3px] border-t-0 py-5"
                >
                  {row[header.key]}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Datatable;
